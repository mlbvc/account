import React, {Component} from 'react'
import {
  Chart,
  Geom,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide,
  Axis,
} from "bizcharts"
import DataSet from '@antv/data-set'

export default class Charts extends Component {
  render() {
    const data = [
      {
        day: '1',
        pen: 8,
        book: 15,
        paper: 15,
      },
      {
        day: '2',
        pen: 7,
        book: 12,
        paper: 18,
      },
      {
        day: '3',
        pen: 9.5,
        book: 16,
        paper: 16,
      },
      {
        day: '4',
        pen: 8,
        book: 12,
        paper: 18,
      },
      {
        day: '5',
        pen: 7,
        book: 12,
        paper: 15,
      },
      {
        day: '6',
        pen: 6,
        book: 11,
        paper: 14,
      },
      {
        day: '7',
        pen: 10,
        book: 10,
        paper: 10,
      },
    ]
    const data2 = [
      {
        day: "1",
        pen: 8,
        book: 12,
        paper: 16,
      },
      {
        day: "2",
        pen: 9,
        book: 15,
        paper: 18,
      },
      {
        day: "3",
        pen: 10,
        book: 12,
        paper: 12,
      }      
    ]
    const data3 = [
      {
        item: "事例一",
        count: 40
      },
      {
        item: "事例二",
        count: 21
      },
      {
        item: "事例三",
        count: 17
      },
      {
        item: "事例四",
        count: 13
      },
      {
        item: "事例五",
        count: 9
      }
    ]
    const data4 = [
      {
        item: 'breakfast',
        one: 8,
        two: 10,
        three: 10
      },
      {
        item: 'lunch',
        one: 6,
        two: 15,
        three: 16
      },
      {
        item: 'dinner',
        one: 10,
        two: 12,
        three: 15
      },
    ]
    var dv = new DataSet.View().source(data),
        dv2 = new DataSet.View().source(data2),
        dv3 = new DataSet.View().source(data3),
        dv4 = new DataSet.View().source(data4)
    dv.transform({
      type: "fold",
      fields: ["pen", "book", "paper"],
      key: "日期",
      value: "价格"
    })
    dv2.transform({
      type: "fold",
      fields: ["pen", "book", "paper"],
      key: "time",
      value: "price"
    })
    dv3.transform({
      type: "percent",
      fields: "count",
      dimension: "item",
      as: "percent"
    })
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    }
    dv4.transform({
      type: "fold",
      fields: ["one", "two", "three"],
      key: "time",
      value: "price"
    })
    return (
      <div>
        {/* 按价格层叠图 */}
        <Chart
          width={800}
          height={700}
          data={dv}
          forceFit
        >
          <Legend />
          <Axis name={"日期"} />
          <Axis name={"价格"} />
          <Tooltip />
          <Geom
            type={"intervalStack"}
            position={"日期*价格"}
            color={"day"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
        {/* 按价格柱状图 */}
        <Chart
          width={800}
          height={700}
          data={dv2}
          forceFit
        >
          <Axis name={"time"} />
          <Axis name={"price"} />
          <Legend />
          <Tooltip />
          <Geom
            type={"interval"}
            position={"time*price"}
            color={"day"}
            /**不加adjust 会变成层叠图 */
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
        {/* 扇形图 */}
        <Chart
          height={window.innerHeight}
          data={dv3}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;>
              </span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item + ": " + val;
              }}
            />
          </Geom>
        </Chart>
        {/* 按时间柱形图 */}
        <Chart
          width={800}
          height={700}
          data={dv4}
          forceFit
        >
          <Axis name={"time"} />
          <Axis name={"price"} />
          <Legend />
          <Tooltip />
          <Geom
            type={"interval"}
            position={"time*price"}
            color={"item"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    )
  }
}
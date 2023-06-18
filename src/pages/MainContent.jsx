import { Badge, Card, Col, Divider, Row, Typography } from "antd";
import React, { useState } from "react";
import dummyImage from "../icons/Group 646.png";
import mockData from "../utils/mockData";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CustomCard from "../components/cards/CustomCard";
import ColumnsHeading from "../components/columns/ColumnsHeading";

const cardBodyStyle = {
  padding: "1rem",
  background: "#F5F5F5",
};

const MainContent = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <>
      <Row
        align={"middle"}
        style={{ padding: "2rem 1rem" }}
        justify={"space-between"}
      >
        <Col>
          <Typography.Title level={"h5"} className="m-0">
            Mobile App
          </Typography.Title>
        </Col>
        <Col>
          <img src={dummyImage} alt="dummy-image" />
        </Col>
      </Row>

      <DragDropContext onDragEnd={onDragEnd}>
        <Row justify={"space-evenly"} style={{ padding: "1rem" }}>
          {data?.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <Col
                  style={{ margin: "1rem" }}
                  span={7}
                  sm={24}
                  md={10}
                  lg={7}
                  xs={24}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <Card bodyStyle={cardBodyStyle}>
                    <ColumnsHeading section={section} />
                    <Row>
                      {section.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <CustomCard
                                key={task.id}
                                title={task.title}
                                priority={task.priority}
                                description={task.description}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Row>
                  </Card>
                </Col>
              )}
            </Droppable>
          ))}
        </Row>
      </DragDropContext>
    </>
  );
};

export default MainContent;

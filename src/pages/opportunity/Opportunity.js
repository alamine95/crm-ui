import React, { useState } from 'react';
import "./opportunity.scss";
import NavbarContact from '../../components/navbar/NavbarContact';
import SideBar from '../../components/sidebar/SideBar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
    { id: uuidv4(), content: 'First task'},
    { id: uuidv4(), content: 'Second task'}
];

const columnsFromBackend = {
        [uuidv4()]: {
            name: 'Todo',
            items: itemsFromBackend
        }
};

const onDragEnd = (result, columns, setColumns) => {
    if(!result.destination) return;
    const { source, destination } = result;
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
        ...columns,
        [source.droppableId]: {
            ...column,
            items: copiedItems
        }
    })
}

const Opportunity = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className="opportunity">
        <SideBar/>
        <div className="opportunityContainer">
            <NavbarContact/>


            <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([id, column]) => {
                        return (
                            <div>
                                <h2>{column.name}</h2>
                            <Droppable droppableId={id} key={id}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}  
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 500
                                            }}
                                            >
                                                {column.items.map((item, index) =>{
                                                    return (
                                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div 
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: 'none',
                                                                            padding: 16,
                                                                            margin: '0 0 8px 0',
                                                                            minHeight: '50px',
                                                                            backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                                            color: 'white',
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                        >
                                                                            {item.content}
                                                                    </div>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                        );
                    })}
                </DragDropContext>
            </div>



        </div>
    </div>
  )
}

export default Opportunity
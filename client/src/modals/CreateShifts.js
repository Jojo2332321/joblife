import React, {useContext, useEffect, useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {fetchCompanyType, fetchPositions, fetchWorker, fetchWorkHourTemplates} from "../http/ShiftsAPI";
import {Context} from "../index";
import Select from 'react-select';
const CreateShifts = ({show, onHide}) => {
    const {shifts}=useContext(Context)
    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedShift, setSelectedShift] = useState("");

    useEffect(()=>{
        fetchPositions().then(data =>shifts.setPositions(data));
        fetchWorker().then(data =>shifts.setWorker(data))
        fetchWorkHourTemplates().then(data =>shifts.setWorkHourTemplates(data))
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Employee: ${selectedEmployee}, Position: ${selectedPosition}, Shift: ${selectedShift}`);
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Select Employee, Position, and Shift for</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit}>

                    <Select
                        value={selectedEmployee}
                        onChange={(selectedOption) => setSelectedEmployee(selectedOption)}
                        options={shifts.worker.map(item =>({value:item.id, label:`${item.firstname} ${item.surname}`}))} />

                    <Form.Group>
                        <Form.Label>Position:</Form.Label>
                        <Form.Select
                            value={selectedPosition}
                            onChange={(e) => setSelectedPosition(e.target.value)}
                        >
                            <option value="">Select Position</option>
                            {shifts.positions.map(position=>
                            <option key={position.id} value={position.id}> {position.name}</option> )}

                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="shift">
                        <Form.Label>Shift:</Form.Label>
                        <Form.Select
                            value={selectedShift}
                            onChange={(e) => setSelectedShift(e.target.value)}
                        >
                            <option value="">Select Shift</option>
                            {shifts._workHourTemplates.map(workHourTemplate=>
                                <option key={workHourTemplate.id} value={workHourTemplate.id}> {workHourTemplate.name}</option> )}

                        </Form.Select>
                    </Form.Group>

                    <div className="d-flex justify-content-end mt-2">
                    <Button variant="primary">
                        Add
                    </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateShifts;

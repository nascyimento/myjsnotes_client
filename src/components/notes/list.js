import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'moment';
import { Button, Column, List, Tag, Title } from "rbx";
import React, { Fragment, useEffect } from 'react';

const ListNotes = (props) => {

    useEffect(() => {
        props.fetchNotes();
    },[props.isOpen]);

    return (
        <Fragment>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>
                        {props.notes.length} Notes
                    </Title>
                    <Column size={2}>
                        <Button state="active" color="custom-purple" outlined size="small" onClick={() => {
                            props.createNote()
                            setTimeout(() => {
                                props.setIsOpen(false);
                            }, 10);
                        }}>
                            Create Note
                        </Button>
                    </Column>
                </Column>
            </Column.Group>
            <List className="notes-list">
                {props.notes.map((item, key) =>
                    <List.Item key={key} onClick={() => props.selectNote(item._id)} active={item._id == props.currentNote._id}>
                        <Title size={6}>
                            {item.title}
                        </Title>
                        <Title size={6} subtitle >
                            {item.body.replace(/(<([^>]+)>)/ig, " ").substring(0, 100)}
                        </Title>

                        <Column.Group breakpoint="mobile">
                            <Column size={10}>
                                <Tag color="dark">
                                    {Moment(item.createdAt).format('DD/MM')}
                                </Tag>
                            </Column>
                            <Column size={2} onClick={() => props.deleteNote(item._id)}>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => {
                                        props.deleteNote(item);
                                    }}
                                    color="grey"
                                />
                            </Column>
                        </Column.Group>
                    </List.Item>
                )}
            </List>
        </Fragment >
    )
}

export { ListNotes };

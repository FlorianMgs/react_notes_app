import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.length > 20 ? `${note.body.slice(0, 20)}...` : note.body}</h4>
                <h4 className="cross" onClick={() => props.deleteNote(note.id)}><b>X</b></h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

import { useState } from "react";
import { Column, Input } from "rbx";

const Search = (props) => {

    let [query, setQuery] = useState('');

    const handleChange = (query) => {
        setQuery(query);
        if (query.trim() === '') {
            props.fetchNotes()
        } else {
            props.searchNotes(query);
        }
    }

    return (
        <Column.Group className="is-v-centered" breakpoint="mobile">
            <Column size="9" offset={1}>
                <Input
                    type="text"
                    name="query"
                    value={query}
                    placeholder="Search notes..."
                    onChange={(e) => handleChange(e.target.value)}
                />
            </Column>
        </Column.Group>
    );

}

export { Search }
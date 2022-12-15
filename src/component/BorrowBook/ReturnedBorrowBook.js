import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function ReturnedBorrowBook() {

    let navigate = useNavigate();

    const { borrowBookId } = useParams();
    const [borrowBooks, setBorrowBooks] = useState([]);
    useEffect(() => {
        loadBorrowBooks();
    }, []);

    const loadBorrowBooks = async () => {
        const result = await axios.get("/api/borrowBooks");
        setBorrowBooks(result.data);
    };

    const [blackLists, setBlackLists] = useState([]);
    useEffect(() => {
        loadBlacks();
    }, []);

    const loadBlacks = async () => {
        const result = await axios.get("/api/blackLists");
        setBlackLists(result.data);
    };

    const returnBook = async (id) => {
        await axios.delete(`/api/borrowBooks/${id}`);
        loadBorrowBooks();
        navigate("/api/borrowBooks/okeyReturned")
    };
    return (

        <div className="container">

            <h2>Kitabın teslim edildiğini onaylıyor musunuz?</h2>

            <button className="btn btn-outline-primary" onClick={() => returnBook(borrowBookId)}>
                Onayla
            </button>
            <h2></h2>
            <><>
                <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>İptal</button>
            </>
            </>
        </div>
    )
}

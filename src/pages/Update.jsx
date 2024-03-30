import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userSlice";

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id)
    const { name, email } = existingUser[0];
    const [username, setName] = useState(name);
    const [useremail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: username,
            email: useremail
        }))
        navigation("/")
    }

    return (
        <Fragment>
            <div class="container">
                <h2 className="mt-5">Update User</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email-ID</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Name" aria-label="name" aria-describedby="basic-addon1" value={username} />
                            </td>
                            <td>
                                <input onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" placeholder="Name" aria-label="name" aria-describedby="basic-addon1" value={useremail} />
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={handleUpdate}>Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default Update;
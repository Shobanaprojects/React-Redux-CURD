import { Fragment, useState } from "react";
import { addUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AdduserModal = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    }

    return (
        <Fragment>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add new user</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div>
                                    <label class="form-label">Username</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} autoComplete="off" class="form-control" />
                                </div>
                                <div className="mt-3">
                                    <label class="form-label">Email</label>
                                    <input type="text" onChange={(e) => setEmail(e.target.value)} autoComplete="off" class="form-control" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={handleSubmit} class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdduserModal;
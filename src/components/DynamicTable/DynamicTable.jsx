import "./DynamicTable.css"
import eyeIcon from "../../assets/images/eye-solid.svg"

export default function DynamicTable() {
    let userData = [
        {
            sno: 1,
            name: "Sandeep",
            username: "sandeepini",
            email: "sandeepini.2012@gmail.com",
            phone: "9559123391",
            website: "ABC",
            action: ""
        },
        {
            sno: 1,
            name: "Pradeep",
            username: "sandeepini",
            email: "sandeepini.2012@gmail.com",
            phone: "9559123391",
            website: "ABBCCBCBCBCBCBCB",
            action: ""
        }
    ]

    return (
        <div className="wrap-table">
            <div className="wrap-content">
                <h1 className="table-heading">User Data</h1>
                <table className="table">
                    <tr>
                        <th>S.No.</th>
                        <th>Name </th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>

                    {
                        userData.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.website}</td>
                                <td><img src={eyeIcon} alt="" /></td>
                            </tr>
                        ))
                    }
                </table>
            </div>


        </div>
    )
}
import { NextPage } from "next";
import {useSession} from "next-auth/react"

const Protected: NextPage = (): JSX.Element => {
    const session = useSession();
    console.log(session)
    return (
        <div>
            <h1>Users only</h1>
        </div>
    )
}

export default Protected
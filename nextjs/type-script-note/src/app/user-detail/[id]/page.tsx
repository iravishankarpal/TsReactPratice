import { UserType } from '@/types/user.type';
import apiCall from '@/utils/apicall';

export default async function page(props: { params: { id: string } }) {
    const user: UserType = await apiCall.get(`users/${props.params.id}`).then(res => res.data)
    return (
        <div>
            <div className="p-4">
                <p>{user.id}</p>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
                <p>{user.username}</p>
            </div>
        </div>
    )
}
export async function generateStaticParams() {
    const user_list: UserType[] = await apiCall.get("users").then(res => res.data)
    return user_list.map((user) => ({ id: user.id.toString() }))
}
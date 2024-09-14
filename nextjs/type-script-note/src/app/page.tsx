"use client";
import { UserType } from "@/types/user.type";
import apiCall from "@/utils/apicall";
import Link from "next/link";
import { useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default function Home() {
  const [user_list, setUser_list] = useState<UserType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      await delay(2000);
      const user_list: UserType[] = await apiCall.get("users").then(res => res.data);
      setUser_list(user_list);
    }
    fetchData();
  }, [])

  if (user_list.length === 0) return <div>Loading...</div>

  return (
    <div>
      {user_list.map((user) => (
        <div className="p-4" key={user.id}>
          <Link href={`/user-detail/${user.id}`}
            className="text-blue-500" prefetch={false}>
            <h1>{user.name}</h1>
          </Link>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

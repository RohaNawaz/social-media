"use client"

import Avatar from "./Avatar"
import { useState } from "react";

export default function FriendsInfo() {
    const [profile] = useState(null);
    return (
        <div className="flex gap-2">
            <Avatar url={profile?.avatar}/>
            <div className="pt-2">
                <h3 className="font-bold text-xl">{profile?.name}</h3>
                <div className="text-sm leading-3">5 mutual friends</div>
            </div>
        </div>
    )
}
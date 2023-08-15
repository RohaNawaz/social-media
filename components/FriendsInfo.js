import Avatar from "./Avatar"

export default function FriendsInfo() {
    return (
        <div className="flex gap-2">
            <Avatar />
            <div className="pt-2">
                <h3 className="font-bold text-xl">Ezzah</h3>
                <div className="text-sm leading-3">5 mutual friends</div>
            </div>
        </div>
    )
}
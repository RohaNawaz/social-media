import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function page() {
    return(
        <Layout>

            <h1 className="text-6xl text-gray-300 mb-3">Notifications</h1>

            <Card noPadding={true}>
                <div className="">

                    <div className="border-b border-b-gray-100 p-4 flex gap-3 items-center">
                        <Link href={'/Profile'}>
                          <Avatar />
                        </Link>
                       <div>
                        <Link href={'/Profile'} className="font-semibold mr-1 hover:underline">Ezzah</Link> 
                        liked 
                        <Link href="" className=" ml-1 text-socialBlue hover:underline">your photo</Link>
                       </div>
                    </div>

                    <div className="border-b border-b-gray-100 p-4 flex gap-3 items-center">
                        <Link href={'/Profile'}>
                          <Avatar />
                        </Link>
                       <div>
                        <Link href={'/Profile'} className="font-semibold mr-1 hover:underline">Ezzah</Link> 
                        liked 
                        <Link href="" className=" ml-1 text-socialBlue hover:underline">your photo</Link>
                       </div>
                    </div>

                    <div className="border-b border-b-gray-100 p-4 flex gap-3 items-center">
                        <Link href={'/Profile'}>
                          <Avatar />
                        </Link>
                       <div>
                        <Link href={'/Profile'} className="font-semibold mr-1 hover:underline">Ezzah</Link> 
                        liked 
                        <Link href="" className=" ml-1 text-socialBlue hover:underline">your photo</Link>
                       </div>
                    </div>
                    
                </div>
            </Card>
        </Layout>
    )
}
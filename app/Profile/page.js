import Avatar from "@/app/components/Avatar";
import Card from "@/app/components/Card";
import Layout from "@/app/components/Layout";

export default function page() {
    return (
        <Layout>
            <Card noPadding={true}> 
            <div className="relative">

              <div className="h-36 overflow-hidden flex justify-center items-center">
                <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
              </div>

              <div className="absolute top-12 left-4">
                <Avatar size={'lg'}/>
              </div>

              <div className="p-3 pb-24">
                <div className="ml-40">
                  <h1 className="text-3xl font-bold">
                   Mariam
                  </h1>
                  <div>Bahawalpur, Pakistan</div>
                </div>
              </div>

            </div>
            </Card>
        </Layout>
    )
}
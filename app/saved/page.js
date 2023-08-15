import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";

export default function page() {
    return (
        <Layout>

            <h1 className="text-gray-300 text-6xl mb-3">Saved posts</h1>

            <PostCard />
            <PostCard />
        </Layout>
    )
}
export default function PostPage() {
    const posts = [];
    return (
        <main>
            <div className="my-5 ml-8 flex items-end">
                <h1 className="text-2xl font-bold">글</h1>
                <span className="text-xs pb-0.5">(최신순)</span>
            </div>
            <article className="ml-10"></article>
        </main>
    );
}

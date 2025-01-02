export const metadata = {
    title: "jhdgo1225 blog",
    description: "jhdgo1225 nextjs blog",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

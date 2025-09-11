import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Welcome
                    </h1>
                    <p className="text-lg text-gray-600">
                        This is a clean and simple homepage.
                    </p>
                </div>
            </div>
        </>
    );
}
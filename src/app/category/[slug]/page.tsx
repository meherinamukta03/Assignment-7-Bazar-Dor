import React from "react";
export const instant = false;
type CategoryPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;

    return (
        <div>
            from Category page: {slug}
        </div>
    );
};

export default CategoryPage;
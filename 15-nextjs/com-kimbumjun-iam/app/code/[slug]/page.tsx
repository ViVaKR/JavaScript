import React from 'react';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1>{slug}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem atque cum
        officia alias soluta. Culpa, distinctio. Id molestiae, maxime
        perferendis quaerat porro laboriosam corrupti cumque optio minima quae
        dolores saepe.
      </p>
    </div>
  );
};

export default Page;

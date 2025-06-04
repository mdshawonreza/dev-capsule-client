import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogGrid from '@/components/blog/blog-grid';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Blog Hero */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and industry trends in web development, design, and digital marketing.
            </p>
          </div>
        </section>
        
        {/* Blog Content */}
        <BlogGrid />
      </main>
      
      <Footer />
    </div>
  );
}
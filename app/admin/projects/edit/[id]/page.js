// app/admin/projects/edit/[id]/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function EditProjectPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    slug: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch(`http://api.devcapsule.com/projects/${id}`);
        const project = await res.json();
        setFormData({
          title: project.title || "",
          category: project.category || "",
          description: project.description || "",
          image: project.image || "",
          slug: project.slug || "",
        });
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch project:", error);
        Swal.fire("Error", "Could not load project.", "error");
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://api.devcapsule.com/projects/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      Swal.fire("Success", "Project updated successfully!", "success");
      router.push("/admin/projects");
    } else {
      Swal.fire("Error", "Failed to update project.", "error");
    }
  };

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div>
      
      <div className="max-w-xl mx-auto mt-12 px-4">
        <h1 className="text-3xl text-center font-bold mb-6">Edit {formData.title} Project</h1>
        <form
  onSubmit={handleSubmit}
  className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg animate-fade-in"
>
  

  {/* Title */}
  <div>
    <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Title</label>
    <input
      id="title"
      name="title"
      value={formData.title}
      onChange={handleChange}
      placeholder="Enter project title"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>

  {/* Category */}
  <div>
    <label htmlFor="category" className="block text-gray-700 font-medium mb-1">Category</label>
    <input
      id="category"
      name="category"
      value={formData.category}
      onChange={handleChange}
      placeholder="Enter category"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>

  {/* Image URL */}
  <div>
    <label htmlFor="image" className="block text-gray-700 font-medium mb-1">Image URL</label>
    <input
      id="image"
      name="image"
      value={formData.image}
      onChange={handleChange}
      placeholder="Enter image URL"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>

  {/* Slug */}
  <div>
    <label htmlFor="slug" className="block text-gray-700 font-medium mb-1">Slug</label>
    <input
      id="slug"
      name="slug"
      value={formData.slug}
      onChange={handleChange}
      placeholder="Enter slug"
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>

  {/* Description */}
  <div>
    <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description</label>
    <textarea
      id="description"
      name="description"
      value={formData.description}
      onChange={handleChange}
      placeholder="Enter project description"
      rows={4}
      className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg"
    >
      Update Project
    </button>
  </div>
</form>


      </div>
    </div>
  );
}

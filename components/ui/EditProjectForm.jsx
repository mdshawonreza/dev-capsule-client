"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function EditProjectForm({ project }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: project.title || "",
    category: project.category || "",
    description: project.description || "",
    image: project.image || "",
    slug: project.slug || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://your-server.com/api/projects/${project.id}`, {
      method: "PUT",
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

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Title"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Category"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Image URL"
        />
        <input
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Slug"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Description"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Project
        </button>
      </form>
    </div>
  );
}

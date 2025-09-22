"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import "sweetalert2/dist/sweetalert2.min.css";

export default function CreateProject() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    slug: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();
  const IMGBB_API_KEY = "8b84a87eec39cec79744875059304928"; // Replace with your key
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.devcapsule.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to create this project?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, create it!",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;

    if (!imageFile) {
      setMessage("Please select an image.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Upload image to ImgBB
      const imgData = new FormData();
      imgData.append("image", imageFile);

      const imgRes = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: "POST",
        body: imgData,
      });

      const imgResult = await imgRes.json();
      if (!imgResult.success) {
        setMessage("Image upload failed.");
        setLoading(false);
        return;
      }

      const imageUrl = imgResult.data.url;

      // Post project data to backend
      const res = await fetch(`${API_BASE}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, image: imageUrl }),
      });

      const data = await res.json();

      if (res.ok) {
        await Swal.fire({
          title: "Success!",
          text: "Project created successfully.",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          willClose: () => {
            router.push("/admin/projects");
          },
        });
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <style>
        {`
          /* Fix Tailwind CSS conflict with SweetAlert2 buttons */
          .swal2-confirm,
          .swal2-cancel {
            background-color: #3085d6 !important;
            color: white !important;
            border: none !important;
            padding: 8px 20px !important;
            font-size: 16px !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            box-shadow: none !important;
            opacity: 1 !important;
            transition: background-color 0.3s ease !important;
          }
          .swal2-cancel {
            background-color: #aaa !important;
          }
          .swal2-confirm:hover {
            background-color: #2563eb !important;
          }
          .swal2-cancel:hover {
            background-color: #888 !important;
          }
        `}
      </style>

      <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create New Project</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Uploading..." : "Create Project"}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm font-semibold text-gray-700">{message}</p>}
      </div>
    </div>
  );
}

'use client';

<<<<<<< HEAD
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserUpload() {
  const router = useRouter();
=======
import { useState, useEffect } from 'react';


// Definer en type for hver upload
interface Upload {
  id: number;
  fileName: string;
  name: string;
  description: string;
  company: string;
  status: string;
  feedback?: string; // Tilføj feedback som et valgfrit felt
}

export default function UserUploads() {
  // Angiv at uploads er en liste af 'Upload'-objekter
  const [uploads, setUploads] = useState<Upload[]>([]);
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

<<<<<<< HEAD
=======
  // Hent brugerens uploads ved page load
  useEffect(() => {
    async function fetchUploads() {
      const res = await fetch('/api/uploads');
      const data = await res.json();
      setUploads(data.uploads);
    }
    fetchUploads();
  }, []);

  // Håndter fil-upload
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('company', company);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setMessage('File uploaded successfully!');
      setFile(null);
      setName('');
      setDescription('');
      setCompany('');

<<<<<<< HEAD
      router.push('/uploads');
=======
      // Opdater listen over uploads efter en succesfuld upload
      const data = await res.json();
      setUploads((prevUploads) => [data.upload, ...prevUploads]); // Dette opdaterer listen korrekt
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
    } else {
      setMessage('File upload failed.');
    }
  };

  return (
<<<<<<< HEAD
    <div className="container">
      <h1>Upload New File</h1>
      <form onSubmit={handleUpload}>
        <div className="form-group">
=======
    <div>
      <h1>Your Uploads</h1>
      {uploads.length === 0 ? (
        <p>No uploads yet</p>
      ) : (
        <ul>
          {uploads.map((upload) => (
            <li key={upload.id}>
              <p>
                <strong>File Name:</strong> {upload.fileName}<br />
                <strong>Status:</strong> {upload.status === 'pending' ? 'In Process' : upload.status === 'approved' ? 'Approved' : 'Rejected'}<br />
                {/* Tilføj feedback hvis det findes */}
                {upload.feedback && (
                  <p>
                    <strong>Feedback:</strong> {upload.feedback}
                  </p>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}

      <h2>Upload New File</h2>
      <form onSubmit={handleUpload}>
        <div>
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <div className="form-group">
=======
        <div>
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <div className="form-group">
=======
        <div>
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD
        <div className="form-group">
=======
        <div>
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 1574f885894b428637144f879b61c7b8b1f10719

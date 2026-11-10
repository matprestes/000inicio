'use client';

import { useState } from 'react';

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, comment }),
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      setStatus('success');
      setName('');
      setComment('');
      setRating(5);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full border p-2 rounded" 
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Rating</label>
        <select 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))} 
          className="w-full border p-2 rounded"
        >
          {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Comment</label>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          className="w-full border p-2 rounded" 
          required 
        />
      </div>
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Review'}
      </button>
      {status === 'success' && <p className="mt-2 text-green-600">Review submitted!</p>}
      {status === 'error' && <p className="mt-2 text-red-600">Failed to submit review.</p>}
    </form>
  );
}

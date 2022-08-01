import { useState } from 'react';

const WorkoutForm = () => {
	const [title, setTitle] = useState('');
	const [load, setLoad] = useState('');
	const [reps, setReps] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, load, reps };

		const response = await fetch('/api/workouts', {
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			console.log(json.error);
		}
		if (response.ok) {
			setTitle('');
			setLoad('');
			setReps('');
			setError(null);
			console.log('new workout added');
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>add a new workout</h3>

			<label>exercise title</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>

			<label>load (in kg)</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>

			<label>reps</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>

			<button>add workout</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
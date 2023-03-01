import { useRef, useEffect, useState } from 'react';
export default function Ref() {
  const [jobInput, setJobInput] = useState('');
  const [submittedJob, setSubmittedJob] = useState('');
  const previousJob = useRef(null);
  const rendersRef = useRef(0);
  const submitJob = () => {
    if (jobInput === previousJob.current) {
      alert('You can not enter the same input ..');
    }
    setSubmittedJob(jobInput);
  };
  useEffect(() => {
    previousJob.current = jobInput;
  }, [submittedJob]);

  useEffect(() => {
    rendersRef.current++;
  }, [jobInput]);

  return (
    <div className='ref-example'>
      <p className='app-title'>Add a new Job App..</p>
      <div>
        <input
          className='text-input'
          value={jobInput}
          onChange={(e) => {
            setJobInput(e.target.value);
          }}
        />

        <button
          className='add-button'
          onClick={submitJob}
          placeholder='Add new Job'
        >
          Add Next Job..
        </button>
      </div>
      <br />
      <br />
      <hr style={{ width: '100%' }} />
      <div className='jobs-labels-section'>
        <p className='label-text prev-label'>Previous Job</p>
        <p className='label-text current-label'>Posted Job</p>
      </div>
      <div className='jobs-results'>
        <div className='data-text'>{previousJob.current}</div>
        <div className='data-text'>{submittedJob}</div>
      </div>
      <div className='render-section'>
        <p className='render-label '>Renders:</p>
        <p className='data-text'>{rendersRef.current}</p>
      </div>
    </div>
  );
}

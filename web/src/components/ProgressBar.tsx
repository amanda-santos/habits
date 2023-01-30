interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progress of habits completed that day"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={{
          width: `${props.progress}%`,
        }}
      />
    </div>
  );
};

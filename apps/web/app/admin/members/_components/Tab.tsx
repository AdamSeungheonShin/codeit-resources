interface TabProps {
  team: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ team, isActive, onClick }: TabProps): JSX.Element {
  return (
    <li>
      <button
        type="button"
        className={`text-lg-bold relative pb-8 ${isActive ? "text-custom-black/80" : "text-custom-black/50"}`}
        onClick={onClick}
      >
        {team}
        {isActive ? (
          <span className="bg-custom-black/80 absolute bottom-0 left-0 h-2 w-full transition-all duration-300" />
        ) : null}
      </button>
    </li>
  );
}

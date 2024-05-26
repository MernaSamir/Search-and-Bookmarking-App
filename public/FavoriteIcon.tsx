export default function FavoriteIcon({ isLike, toggleFavorite }: { isLike?: boolean; toggleFavorite?: () => void }) {
  return (
    <svg onClick={toggleFavorite} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {isLike ? (
        <path
          d="M4 2C3.44772 2 3 2.44772 3 3V17.582C3 17.8417 3.14797 18.0818 3.38815 18.2071C3.62833 18.3324 3.91467 18.3097 4.126 18.15L10 13.5L15.874 18.15C16.0853 18.3097 16.3717 18.3324 16.6119 18.2071C16.852 18.0818 17 17.8417 17 17.582V3C17 2.44772 16.5523 2 16 2H4Z"
          fill="#82C574"
        />
      ) : (
        <path
          d="M4 2C3.44772 2 3 2.44772 3 3V17.582C3 17.8417 3.14797 18.0818 3.38815 18.2071C3.62833 18.3324 3.91467 18.3097 4.126 18.15L10 13.5L15.874 18.15C16.0853 18.3097 16.3717 18.3324 16.6119 18.2071C16.852 18.0818 17 17.8417 17 17.582V3C17 2.44772 16.5523 2 16 2H4Z"
          fill="#393F4C"
          stroke="#393F4C"
          strokeWidth="0.5"
        />
      )}
    </svg>
  );
}

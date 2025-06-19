const TipsItem = ({ num, desc, className }) => {
  return (
    <div className={className}>
      <span>{num}</span>
      <p className='desc'>{desc}</p>
    </div>
  );
};

export default TipsItem;

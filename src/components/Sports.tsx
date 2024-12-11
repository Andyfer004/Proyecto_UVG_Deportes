import "./Sports.css";

function SportsIcons() {
  const items = [
    { id: 1, icon: "/sports1-section.svg", alt: "Basketball" },
    { id: 2, icon: "/sports2-section.svg", alt: "Football" },
    { id: 3, icon: "/sports3-section.svg", alt: "Volleyball" },
  ];

  return (
    <div className="sports-icons-container">
      {items.map((item) => (
        <div key={item.id} className="sports-icon">
          <img src={item.icon} alt={item.alt} className="sports-icon-img" />
        </div>
      ))}
    </div>
  );
}

export default SportsIcons;
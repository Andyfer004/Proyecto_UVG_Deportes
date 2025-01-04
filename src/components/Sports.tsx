import "./Sports.css";

function SportsIcons() {
  
  const items = [
    { id: 1, icon: "/sports1-section.svg", alt: "Basketball" , href:  "/futbol"},
    { id: 2, icon: "/sports2-section.svg", alt: "Football", href:  "/futbol" },
    { id: 3, icon: "/sports3-section.svg", alt: "Volleyball", href:  "/futbol" },
  ];

  return (
    <div className="sports-icons-container">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="sports-icon"
        >
          <img
            src={item.icon}
            alt={item.alt}
            className="sports-icon-img"
          />
        </a>
      ))}
    </div>
  );
}

export default SportsIcons;
function SportsIcons() {
  const items = [
    { id: 1, icon: "/sports1-section.svg", alt: "Basketball" }, 
    { id: 2, icon: "/sports2-section.svg", alt: "Football" },   
    { id: 3, icon: "/sports3-section.svg", alt: "Volleyball" }, 
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem 0",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#000",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#018E38";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src={item.icon}
            alt={item.alt}
            style={{
              width: "70px", 
              height: "70px",
              transition: "fill 0.3s ease",
              filter: "invert(1)", 
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default SportsIcons;

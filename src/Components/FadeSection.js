import React from 'react'

function FadeSection(prop) {
  // source: https://stackoverflow.com/questions/59595700/how-to-make-a-react-component-fade-in-on-scroll-using-intersectionobserver-but
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    console.log(prop)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {prop.children}
    </div>
  );
}

export default FadeSection

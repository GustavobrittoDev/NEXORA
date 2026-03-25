export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="animated-background">
      <div className="animated-background__layer animated-background__layer--primary" />
      <div className="animated-background__layer animated-background__layer--secondary" />
      <div className="animated-background__veil" />
    </div>
  );
}

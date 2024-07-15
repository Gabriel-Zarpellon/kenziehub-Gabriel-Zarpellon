export function Modal({ setIsOpen, title, children, value }) {

    return (
      <div role="dialog">
        <div>
          <h3 className="title3">{title}</h3>
          <button onClick={() => setIsOpen(value)}>X</button>
        </div>
        {children}
      </div>
    );
  }
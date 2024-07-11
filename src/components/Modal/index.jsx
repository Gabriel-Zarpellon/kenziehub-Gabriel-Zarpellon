export function Modal({ setIsOpen, title, children }) {

    return (
      <div role="dialog">
        <div>
          <h3>{title}</h3>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        {children}
      </div>
    );
  }
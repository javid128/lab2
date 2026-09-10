import { useState } from "react";

export function Figuras() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [figura, setFigura] = useState("triangulo");
  const [resultado, setResultado] = useState(null);

  const calcularArea = (e) => {
    e.preventDefault();

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || n1 <= 0 || (figura !== "cuadrado" && (isNaN(n2) || n2 <= 0))) {
      setResultado("Ingrese valores numericos positivos");
      return;
    }

    let area = 0;
    if (figura === "triangulo") {
      area = (n1 * n2) / 2;
    } else if (figura === "rectangulo") {
      area = n1 * n2;
    } else if (figura === "cuadrado") {
      area = n1 * n1;
    }

    setResultado(area);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Calculadora de Áreas</h2>

            <form onSubmit={calcularArea}>
              <label className="form-label">Figura</label>
              <select
                className="form-select mb-3"
                value={figura}
                onChange={(e) => setFigura(e.target.value)}
              >
                <option value="triangulo">Triángulo (base × altura / 2)</option>
                <option value="rectangulo">Rectángulo (base × altura)</option>
                <option value="cuadrado">Cuadrado (lado × lado)</option>
              </select>

              <label className="form-label">
                {figura === "cuadrado" ? "Lado" : "Base"}
              </label>
              <input
                type="number"
                className="form-control mb-3"
                value={num1}
                placeholder="Digite un numero"
                onChange={(e) => setNum1(e.target.value)}
              />

              <label className="form-label">Altura</label>
              <input
                type="number"
                className="form-control mb-3"
                value={num2}
                placeholder="Digite un numero"
                disabled={figura === "cuadrado"}
                onChange={(e) => setNum2(e.target.value)}
              />

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Calcular
                </button>
              </div>
            </form>

            {resultado !== null && (
              <div className="resultado text-center mt-4">
                Resultado: <strong>{resultado}</strong>
                {typeof resultado === "number" && " u²"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

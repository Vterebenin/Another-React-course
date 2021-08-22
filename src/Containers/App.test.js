import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUpdate("YOUR_PROJECT_ID", "Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.componentWillUpdate(12, "Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.componentWillUpdate(2, "Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.componentWillUpdate("bc23a9d531064583ace8f67dad60f6bb", "Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.componentWillUpdate("fake_project_id", "Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.componentWillUpdate(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})

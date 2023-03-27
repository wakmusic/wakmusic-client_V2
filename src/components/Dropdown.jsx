import React, {useState, useEffect} from "react"


const Dropdown = (props) => {
    const [dropdown, setDropdown] = useState(false);

    const handleClick = (e) => {
        let target = e.target.className;
        if (target === "sort-unselected") {
            setDropdown(false);
            props.setType(e.target.id);
            props.setData([]);
            const selected = document.getElementsByClassName('sort-selected')[0];
            e.target.className = "sort-selected";
            selected.className = "sort-unselected";

            const unselected = document.getElementsByClassName('sort-unselected');
            for (let i = 0; i < unselected.length; i++) {
                unselected[i].style.top = `${i * 31 + 59}px`;
            }
        }

        if (target !== "albums-sort" && target !== "sort-selected" && target["animVal"] !== "dropdown-arrow") {
            setDropdown(false);
            const unselected = document.getElementsByClassName('sort-unselected');
            for (let i = 0; i < unselected.length; i++) {
                unselected[i].style.display = 'none';
            }
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
        //eslint-disable-next-line
    }, []);

    const selectItem = () => {
        const unselected = document.getElementsByClassName('sort-unselected');
        setDropdown(!dropdown);
        if (!dropdown) {
            for (let i = 0; i < unselected.length; i++) {
                unselected[i].style.display = 'block';
            }
        } else {
            for (let i = 0; i < unselected.length; i++) {
                unselected[i].style.display = 'none';
            }
        }
    }

    return (
        <div className={props.dark ? "albums-sort fadein dropdown-dark" : "albums-sort fadein"} onClick={() => selectItem()}>
            {props.elements.map((item, index) => {
                if (index === 0) return <div id={item.id} className="sort-selected" key={index}>{item.text}</div>
                return <div id={item.id} className="sort-unselected" key={index}>{item.text}</div>
            })}
            <svg width="11" height="7" viewBox="0 0 8 5" fill="none" className="dropdown-arrow"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M6.82843 0.828428L4 3.65685L1.17157 0.828427" stroke="#080F34"
                      className="dropdown-arrow"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default Dropdown;
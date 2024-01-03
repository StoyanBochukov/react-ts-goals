import { FC, type ReactNode } from "react"

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type WarningBoxProps = {
    mode: 'warning';
    children: ReactNode;
    severity: 'low' | 'medium' | 'high'
}

type InfoBoxTypes = WarningBoxProps | HintBoxProps

const Info = (props: InfoBoxTypes) => {

    const { mode, children } = props;

    if(mode === 'hint'){
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
          )
    }
    else{
        const { severity } = props;
        return (
          <aside className={`infobox infobox-warning warning--${severity}`}>
              <h2>Warning</h2>
              <p>{children}</p>
          </aside>
        )
    }

}

export default Info
import './SecondSection.css';
import HtmlLogo from '../../assets/html.svg?react';
import CssLogo from '../../assets/css.svg?react';
import JavaScriptLogo from '../../assets/javascript.svg?react';
import TypeScriptLogo from '../../assets/typescript.svg?react';
import ReactLogo from '../../assets/react.svg?react';
import BootstrapLogo from '../../assets/bootstrap.svg?react';
import SassLogo from '../../assets/sass.svg?react';
import GitLogo from '../../assets/git.svg?react';
import VSCodeLogo from '../../assets/vscode.svg?react';
import GithubLogo from '../../assets/github.svg?react';

const SecondSection = () => {
    return (
        <div className='second-section'>
            <h2 className='second-section-title'>My Tech Stack</h2>
            <p className='second-section-subtitle'>Technologies I have learned and worked with so far</p>
            <div className="second-section-tech-stack-wrapper">
                <HtmlLogo/>
                <CssLogo/>
                <JavaScriptLogo/>
                <TypeScriptLogo/>
                <ReactLogo/>
                <BootstrapLogo/>
                <SassLogo/>
                <GitLogo/>
                <VSCodeLogo/>
                <GithubLogo/>
            </div>
        </div>
    )
}

export default SecondSection
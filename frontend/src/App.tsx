import {useState, ChangeEvent} from 'react';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import GreetTab from './components/GreetTab';

// Define a type for individual tabs for better type safety
interface Tab {
    id: string;
    title: string;
    content: JSX.Element;
}

function App() {
    // State for the Greet functionality (will be part of Tab 1)
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');

    // State for managing the active tab
    const [activeTab, setActiveTab] = useState<string>('tab1');
    const [theme, setTheme] = useState<'light' | 'dark'>('light'); // 'light' is default

    const updateName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Define the content for your 6 tabs
    const tabs: Tab[] = [
        {
            id: 'tab1',
            title: 'Library',
            content: <GreetTab />
        },
        { id: 'tab2', title: 'Missing Games', content: <div>Content for Tab 2. You can put any JSX here!</div> },
        { id: 'tab3', title: 'Missing Updates', content: <div>Content for Tab 3. For example, another component.</div> },
        { id: 'tab4', title: 'Missing DLC', content: <div>Content for Tab 4.</div> },
        { id: 'tab5', title: 'Organize', content: <div>Content for Tab 5.</div> },
        { id: 'tab6', title: 'Issues', content: <div>Content for Tab 6.</div> },
        { id: 'tab7', title: 'Settings', content: <div>Content for Tab 7.</div> },
    ];

    const currentTab = tabs.find(tab => tab.id === activeTab);

    return (
        <div id="App" className={theme}> {/* Apply theme class here */}
            {/* Menubar */}
            <div className="menubar">
                <div className="menubar-item">File</div>
                <div className="menubar-item">Debug </div>
                <div className="menubar-item" onClick={toggleTheme} style={{ cursor: 'pointer' }}>Theme</div>
                {/* Add more menu items as needed */}
            </div>

            {/* Main content area */}
            <div className="main-content">
                <div className="tab-navigation">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {currentTab ? currentTab.content : <div>Please select a tab.</div>}
                </div>
            </div>
        </div>
    )
}

export default App

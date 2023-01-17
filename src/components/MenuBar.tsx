import React from 'react';
import {Menu} from 'semantic-ui-react';
import {$state} from "../router";

interface Props {
    title?: string;
    addDrawing: () => void;
    isPdfLoaded: boolean;
    savingPdfStatus: boolean;
    savePdf: () => void;
    isPdfSaved: boolean;
    downloadPdf: () => void;
}

export const MenuBar: React.FC<Props> = (
    {
        title,
        addDrawing,
        isPdfLoaded,
        savingPdfStatus,
        savePdf,
        downloadPdf,
        isPdfSaved
    }
) => (
    <Menu pointing className="custom-menubar">
        <Menu.Item header>{title || "PDF Editor"}</Menu.Item>
        <Menu.Menu position="right">
            {isPdfLoaded && (
                <>
                    <Menu.Item name="Add Signature" onClick={addDrawing}/>
                    <Menu.Item
                        name={savingPdfStatus ? 'Saving...' : 'Save'}
                        disabled={savingPdfStatus}
                        onClick={savePdf}
                    />
                    <Menu.Item
                        name="Download PDF"
                        disabled={!isPdfSaved}
                        onClick={downloadPdf}
                    />
                    <Menu.Item name="Close" onClick={() => $state.go("files")}/>
                </>
            )}
        </Menu.Menu>
    </Menu>
);

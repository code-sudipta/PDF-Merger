import PDFMerger from "pdf-merger-js";

const mergePdfs = async (pdf1,pdf2)=>{
    const merger = new PDFMerger();
    await merger.add(pdf1);
    await merger.add(pdf2);

    let d = new Date().getTime()
    await merger.save(`public/${d}.pdf`);
    return d
}

export{mergePdfs}
import { ReversePipe } from './reverse.pipe';

describe("reverse pipe testcase",()=>{
    var pipe = new ReversePipe();

    it("abc is the test value and result should cba",()=>{      

      expect(pipe.transform("abc")).toBe("cba");

    });

    it("ABC is the test value and result should CBA",()=>{      
      
            expect(pipe.transform("ABC")).toBe("CBA");
      
    });

    it("AbCd is the test value and result should dCbA",()=>{      
      
            expect(pipe.transform("AbCd")).toBe("dCbA");
      
    });     


})